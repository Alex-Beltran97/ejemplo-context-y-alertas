import { Button, Stack, Typography } from "@mui/material";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const Result = ({ hasError, children }) => {
  return (<>
    { hasError?
      <ResultComponent 
        Icon={ IoCloseCircleOutline }
        msg="Something was wrong!"
      />
      :
      <ResultComponent 
        Icon={ IoCheckmarkCircleOutline }
        msg="Succesfully delete"
      />
    }
    <Stack spacing={ 2 }>
      { children }
    </Stack>
  </>)
};

const ResultComponent = ({ Icon, msg }) =>(<>
  <Typography textAlign="center">
    <Icon style={{ fontSize:"8rem" }} />
  </Typography>
  <Typography variant="subtitle1" textAlign="center">{ msg }</Typography>
</>);

export default Result;