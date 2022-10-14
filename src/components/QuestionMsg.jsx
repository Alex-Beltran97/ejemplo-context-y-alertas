import { Stack, Typography } from "@mui/material";
import { IoAlertCircleOutline } from "react-icons/io5";

const QuestionMsg = ({ children, name, entity }) => {
  return (<>
    <Typography textAlign="center">
      <IoAlertCircleOutline style={{ fontSize:"8rem" }} />
    </Typography>
    <Typography variant="subtitle1" textAlign="center">Do you want to delete the { entity }: { name }?</Typography>
    <Stack spacing={ 2 } direction="row" justifyContent="center">
      { children }
    </Stack>
  </>)
};

export default QuestionMsg;