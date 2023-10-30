// Import necessary modules and dependencies.
import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";
import { useState } from "react";
import { v4 } from 'uuid'

// Define a custom hook called useFileUploader.
export const useFileUploader = () => {
// Define state variables to manage file uploading.
    const [isUploading, setIsUploading] = useState<boolean>(false) // Uploading state.
    const [progress, setProgress] = useState<number>(0) // Upload progress.
    const [error, setError] = useState<string | null>(null) // Error message.

// Define the uploadFiles function to upload one or more files.
    const uploadFiles = async (files: File[] | File | null) => {
        setIsUploading(true)
        setError(null)
        const blobServiceClient = new BlobServiceClient(`https://${import.meta.env.VITE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net?${import.meta.env.VITE_SAS_TOKEN}`)
         // Create a BlobServiceClient using the provided connection details.

        const containerClient = blobServiceClient.getContainerClient(import.meta.env.VITE_CONTAINER)
        // Get a container client based on the environment configuration.
        if (!files) {
            throw "Error: No file selected!"
        }

        if (files instanceof File) {
            files = [files]
        }
        const genNameList: string[] = []
        for (const file of files) {
            try {
                // Generate a unique image name using UUID.
                const uniqueImgName = v4()
                const blockBlobClient = containerClient.getBlockBlobClient(uniqueImgName);
                const options = {
                    blobHTTPHeaders: { blobContentType: file.type },
                    onProgress: (progress: any) => {
                        // Calculate and update the upload progress.
                        const percentCompleted = ((progress.loadedBytes / file.size) * 100).toFixed(2);
                        console.log(`Upload progress: ${percentCompleted} %`);
                        setProgress(parseFloat(percentCompleted));
                    },
                }
                 // Upload the file to Azure Blob Storage.
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
    
// Return the uploadFiles function for use in other parts of the application.
    return [uploadFiles] as unknown as [(files: File | File[] | null) => Promise<string>]
}