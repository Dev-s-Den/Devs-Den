import React from 'react'

import { ChatEngineWrapper, Socket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'

const Chat = () => {
    return (
        <ChatEngineWrapper>
            <Socket 
                projectID={process.env.REACT_APP_KEY}
                userName='test'
                userSecret='secret'
            />

            <Col xs={0} sm={3}>
                <ChatList />
            </Col>

            <Col xs={12} sm={6}>
                <ChatFeed />
            </Col>

            <Col xs={0} sm={3}>
                <ChatSettings />
            </Col>
        </ChatEngineWrapper>
    )
}

export default Chat