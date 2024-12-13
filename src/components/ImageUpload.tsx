// components/ImageUploadWithDetails.tsx
import React, { useState } from 'react';
import { CSSProperties } from 'react';

// import { DynamoDBClient, PutItemCommand, ListTablesCommand } from '@aws-sdk/client-dynamodb';

// Configure DynamoDB client
// const client = new DynamoDBClient({
//     region: "us-west-1",
//     endpoint: "http://localhost:8000", // Connect to local instance
//     credentials: {
//         accessKeyId: "fakeAccessKeyId",
//         secretAccessKey: "fakeSecretAccessKey",
//     },
// });

// Function to check connection to DynamoDB
// async function checkConnection() {
//     try {
//         const data = await client.send(new ListTablesCommand({}));
//         console.log("Connection successful:", data.TableNames);
//     } catch (error) {
//         console.error("Error connecting to DynamoDB:", error);
//     }
// }

// Check connection on load
// checkConnection();

const ImageUploadWithDetails: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [routeName, setRouteName] = useState<string>('');
    const [routeNotes, setRouteNotes] = useState<string>('');
    const [wallDegree, setWallDegree] = useState<number>(0);
    const [info, setInfo] = useState<boolean>(false);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!imageFile) {
            alert('Please upload an image.');
            return;
        }

        // Mock parameters and console log for testing
        const params = {
            TableName: 'MLclimb',
            Item: {
                climbID: { S: Date.now().toString() }, // Unique ID based on timestamp
                routeName: { S: routeName || "Untitled Route" }, // Avoid empty values
                routeNotes: { S: routeNotes || "No Notes" },
                wallDegree: { N: wallDegree.toString() },
                info: { BOOL: info },
                imageName: { S: imageFile.name },
            },
        };

        console.log("Params being sent to DynamoDB (mock):", params);

        // Commented out DynamoDB logic
        // try {
        //     const data = await client.send(new PutItemCommand(params));
        //     console.log('Data saved to DynamoDB:', data);
        //     alert('Data uploaded successfully to DynamoDB.');
        // } catch (error) {
        //     console.error('Error uploading to DynamoDB:', error.message);
        //     alert('Error saving to DynamoDB. Check console for details.');
        // }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.container as CSSProperties}>
            <div style={styles.imageWrapper as CSSProperties}>
                {image ? (
                    <img src={image} alt="Uploaded preview" style={styles.image as CSSProperties} />
                ) : (
                    <p style={styles.placeholderText as CSSProperties}>No image uploaded</p>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={styles.uploadButton as CSSProperties}
            />
            <label>Route Name:</label>
            <input
                type="text"
                name="name"
                value={routeName}
                onChange={(e) => setRouteName(e.target.value)}
                style={styles.textField as CSSProperties}
            />
            <label>Route Notes:</label>
            <input
                type="text"
                name="notes"
                value={routeNotes}
                onChange={(e) => setRouteNotes(e.target.value)}
                style={styles.textField as CSSProperties}
            />
            <label>Wall Degree:</label>
            <input
                type="range"
                name="degree"
                min="0"
                max="90"
                value={wallDegree}
                onChange={(e) => setWallDegree(Number(e.target.value))}
                style={styles.slider as CSSProperties}
            />
            <label>Info:</label>
            <input
                type="radio"
                checked={info}
                onChange={() => setInfo(!info)}
                style={styles.radio as CSSProperties}
            />
            <button type="submit" style={styles.submitButton as CSSProperties}>Submit</button>
        </form>
    );
};

const styles = {
    container: {
        width: '300px',
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    placeholderText: {
        color: '#888',
        textAlign: 'center',
    },
    uploadButton: {
        marginTop: '10px',
    },
    textField: {
        marginTop: '10px',
        padding: '8px',
        width: '90%',
    },
    slider: {
        marginTop: '10px',
        width: '90%',
    },
    radio: {
        marginTop: '10px',
    },
    submitButton: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ImageUploadWithDetails;
