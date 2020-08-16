import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

import mesageChat from '../../data/mesageChat.json';

const ChannelData: React.FC = () => {
  const mesagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    const div = mesagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [mesagesRef]);

  return ( 
    <Container>
      <Messages ref={mesagesRef}>
        {mesageChat.mensagens.map( (mensagem) => (
            <ChannelMessage 
              author={mensagem.author}
              date={mensagem.date}
              content={
                <>
                  { mensagem.hasMention && <Mention>{mensagem.mentioned}</Mention> } {mensagem.content}
                </>
                }
              hasMention={mensagem.hasMention}
              isBot={mensagem.isBot}
            />
          )
        )}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chatlivre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;