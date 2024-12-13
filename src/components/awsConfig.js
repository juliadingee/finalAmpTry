
// import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

// const client = new DynamoDBClient({
//     region: 'us-west-1',
//     credentials: {
//         accessKeyId: 'your-access-key-id',
//         secretAccessKey: 'your-secret-access-key',
//     },
// });

// export async function fetchItem(key) {
//     const params = {
//         TableName: 'MLcilmb',
//         Key: {
//             'climbID': { N: key },
//         },
//     };
//     try {
//         const data = await client.send(new GetItemCommand(params));
//         return data.Item;
//     } catch (error) {
//         console.error('Error fetching item:', error);
//     }
// }
