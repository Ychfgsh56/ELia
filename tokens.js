// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1551207953481211944",
        serverId: "1534724582710186226",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 10, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
