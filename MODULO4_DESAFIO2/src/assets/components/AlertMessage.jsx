import React from "react";

import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const AlertMessage = ({color, messagge}) => {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Badge bg={color}>{messagge}</Badge>
      </Stack>
    </>
  );
};

export default AlertMessage;
