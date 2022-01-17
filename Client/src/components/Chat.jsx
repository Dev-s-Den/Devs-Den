import React, {useState} from 'react'

import { ChatEngineWrapper, Socket, ChatList, ChatFeed, ChatSettings } from 'react-chat-engine'

import { Col } from 'react-grid-system'

const Chat = () => {

const [selector, setSelector] = useState('feed')


    return (
        <ChatEngineWrapper    >
            <Socket 
               projectID='fd57cd2d-03c6-4bda-ab02-2223fd1adc39'
               userName='test'
               userSecret='test'
            />

          { selector === 'list' &&  <Col xs={0} sm={3}>
                <ChatList  projectID='fd57cd2d-03c6-4bda-ab02-2223fd1adc39'
        userName='test'
        userSecret='test' />
              
            </Col>}

            {selector === 'feed' && <Col xs={12} sm={6}>
                <ChatFeed />
            </Col>}

           {selector === 'settings' &&  <Col xs={0} sm={3}>
                <ChatSettings />
            </Col>}
        </ChatEngineWrapper>

        
    )
}

export default Chat