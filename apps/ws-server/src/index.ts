import { WebSocketServer } from 'ws';

const PORT = 8001;

const wss = new WebSocketServer({ port: PORT });

wss.on('listening', () => {
    console.log(`🚀 WebSocket server running on ws://localhost:${PORT}`);
});

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received:', data.toString());
    });

    ws.send('something');
});
