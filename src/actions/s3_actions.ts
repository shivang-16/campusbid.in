export const uploadImageToS3 = async (file: any, signedUrl: string) => {
    try {
        const response = await fetch(signedUrl, {
            method: "PUT",
            headers: {
                "Content-Type": file.type,
            },
            body: file,
        });

        if (!response.ok) {
            throw new Error("Failed to upload file to S3.");
        }

        return response; // Adjust if the response has a specific data format you need
    } catch (error) {
        console.error("Error uploading to S3:", error);
        throw error; // Re-throw error to be caught in handleCreatePost
    }
};