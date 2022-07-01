import React, { useState } from "react";

import {
  Container,
  Wrap,
  Music,
  Album,
  Image,
  Singer,
  Name,
  Author,
  Like,
  Player,
  Controls,
  Button,
  Timer,
  Actualy,
  Bar,
  Total,
  Settings,
  Mute,
  Mix,
  Mixer,
  Icon,
} from "./styles";

// Icons
import {
  RiPlayCircleFill,
  RiPlayList2Fill,
  RiVolumeUpLine,
  RiVolumeMuteLine,
  RiPauseCircleFill,
} from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsShuffle,
  BsDisplay,
} from "react-icons/bs";
import { ImLoop } from "react-icons/im";
import { TbMicrophone2 } from "react-icons/tb";

// Types
interface Types {
  name: string;
  image: string;
  author: string;
}

export const DownBar: React.FC<Types> = ({ name, image, author }) => {
  const [isActive, setIsActive] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isMute, setIsMute] = useState(false);

  return (
    <>
      <Container active={isActive}>
        <Wrap>
          <Music>
            <Album>
              <Image src={image} />
            </Album>
            <Singer>
              <Name>{name}</Name>
              <Author>{author}</Author>
            </Singer>
            <Like onClick={() => setIsLike(!isLike)}>
              <Icon active={!isLike} color="gray" hover={true}>
                <AiOutlineHeart size="1.5em" />
              </Icon>
              <Icon active={isLike} color="#1DB954" hover={false}>
                <AiFillHeart size="1.5em" />
              </Icon>
            </Like>
          </Music>
          <Player>
            <Controls>
              <Button>
                <BsShuffle size="1.3em" />
              </Button>
              <Button>
                <BsFillSkipStartFill size="1.8em" />
              </Button>
              <Button onClick={() => setIsPlay(!isPlay)}>
                <Icon active={!isPlay} color="white" hover={false}>
                  <RiPlayCircleFill size="2.8em" />
                </Icon>
                <Icon active={isPlay} color="white" hover={false}>
                  <RiPauseCircleFill size="2.8em" />
                </Icon>
              </Button>
              <Button>
                <BsFillSkipEndFill size="1.8em" />
              </Button>
              <Button>
                <ImLoop size="1.3em" />
              </Button>
            </Controls>
            <Timer>
              <Actualy>1:00</Actualy>
              <Bar />
              <Total>2:30</Total>
            </Timer>
          </Player>
          <Settings>
            <Button>
              <TbMicrophone2 size="1.2em" />
            </Button>
            <Button>
              <RiPlayList2Fill size="1.2em" />
            </Button>
            <Button>
              <BsDisplay size="1.2em" />
            </Button>
            <Mixer>
              <Mute onClick={() => setIsMute(!isMute)}>
                <Icon active={!isMute} hover={true} color="gray">
                  <RiVolumeUpLine size="1.2em" />
                </Icon>
                <Icon active={isMute} hover={true} color="gray">
                  <RiVolumeMuteLine size="1.2em" />
                </Icon>
              </Mute>
              <Mix />
            </Mixer>
          </Settings>
        </Wrap>
      </Container>
    </>
  );
};
