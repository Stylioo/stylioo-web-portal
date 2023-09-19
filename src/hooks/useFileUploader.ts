import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";
import { useState } from "react";
import { v4 } from 'uuid'


export const useFileUploader = () => {

    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const [error, setError] = useState<string | null>(null)


    const uploadFiles = async (files: File[] | File | null) => {
        setIsUploading(true)
        setError(null)
        const blobServiceClient = new BlobServiceClient(`https://${import.meta.env.VITE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net?${import.meta.env.VITE_SAS_TOKEN}`)
        const containerClient = blobServiceClient.getContainerClient(import.meta.env.VITE_CONTAINER)
        if (!files) {
            throw "Error: No file selected!"
        }

        if (files instanceof File) {
            files = [files]
        }
        const genNameList: string[] = []
        for (const file of files) {
            try {
                const uniqueImgName = v4()
                const blockBlobClient = containerClient.getBlockBlobClient(uniqueImgName);
                const options = {
                    blobHTTPHeaders: { blobContentType: file.type },
                    onProgress: (progress: any) => {
                        const percentCompleted = ((progress.loadedBytes / file.size) * 100).toFixed(2);
                        console.log(`Upload progress: ${percentCompleted} %`);
                        setProgress(parseFloat(percentCompleted));
                    },
                }
                await blockBlobClient.uploadBrowserData(file, options)
                // setGenNameList(prev => [...prev, uniqueImgName])
                genNameList.push(uniqueImgName)
            }
            catch (error: any) {
                throw "Error: Can't upload the file!"
                setError(error.message)
            }
        }
        setIsUploading(false)
        return genNameList

    }

    return [uploadFiles] as unknown as [(files: File | File[] | null) => Promise<string>]
}