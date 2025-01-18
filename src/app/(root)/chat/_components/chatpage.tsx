"use client"
import React from 'react';
import ChatComponent from './chatcomponent';

const ChatPage = () => {
    return (
        <div className="h-full bg-white font-sans ">
            <div className="flex justify-center gap-4">
                <main className="col-span-6">
                    <div className="space-y-6 pb-6 mt-4 min-w-[600px]">
                        <ChatComponent />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ChatPage;
