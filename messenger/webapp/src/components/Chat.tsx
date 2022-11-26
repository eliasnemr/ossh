import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Chat = () => {
  return (
    <Scroller>
      <ChatMessageList>
        <FloatLeft>
          <ChatMessage>
            <Avatar>L1</Avatar>
            <label>
              <h6>Live Agent #1</h6>
              <p>Hello, how can I help you today?</p>
            </label>
          </ChatMessage>
        </FloatLeft>

        <FloatRight>
          <ChatMessageRight>
            <Avatar sx={{ bgcolor: "#153D72" }}>P</Avatar>
            <label>
              <h6>Patient</h6>
              <p>
                Hello! My stomech has been a little icky lately, who can I speak
                to?
              </p>
            </label>
          </ChatMessageRight>
        </FloatRight>

        <FloatLeft>
          <ChatMessage>
            <Avatar>L1</Avatar>
            <label>
              <h6>Live Agent #1</h6>
              <p>I know just the right person for you.. referring you now.</p>
            </label>
          </ChatMessage>
        </FloatLeft>

        <FloatLeft>
          <ChatMessage>
            <Avatar>L1</Avatar>

            <ChatMessageAction>
              <label>
                <h6>Live Agent #1</h6>
                <p>Wants to refer you to a specialised physicist.</p>
              </label>

              <Card
                variant="outlined"
                sx={{
                  border: "none",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image="../assets/gastro.jpeg"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dr George Giannakis
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gastroenterologist
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Live chat</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </ChatMessageAction>
          </ChatMessage>
        </FloatLeft>

        <FloatRight>
          <ChatMessageRight>
            <Avatar sx={{ bgcolor: "#153D72" }}>P</Avatar>
            <label>
              <h6>Patient</h6>
              <p>Thanks!</p>
            </label>
          </ChatMessageRight>
        </FloatRight>
      </ChatMessageList>
    </Scroller>
  );
};

export default Chat;

const Scroller = styled("div")`
  overflow-y: scroll;
  height: calc(100vh - 64px - 100px);
  z-index: 100;
`;

const ChatMessageList = styled("ul")`
  margin: 0;
  padding: 0;

  > div li {
    margin-bottom: 8px;
  }
  > :last-of-type {
    margin-bottom: 0;
  }
`;

const ChatMessage = styled("li")`
  text-align: left;
  max-width: max-content;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  > label * {
    padding: 4px 8px;
    margin: 0;
  }
`;
const ChatMessageRight = styled("li")`
  text-align: right;
  max-width: max-content;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  > label * {
    padding: 4px 8px;
    margin: 0;
  }
`;

const ChatMessageAction = styled("div")`
  text-align: left;
  max-width: max-content;
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 12px;
  > label * {
    padding: 4px 0px;
    margin: 0;
    margin-bottom: 4px;
  }
`;

const ChatReferral = styled("div")`
  width: 100%;
`;

const FloatLeft = styled("div")`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const FloatRight = styled("div")`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
