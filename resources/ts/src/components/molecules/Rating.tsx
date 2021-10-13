import React, { useState, VFC } from "react";
import { Text, Button } from "@chakra-ui/react";

type Props = {
  initial_val: number;
  isReadOnly?: boolean;
};

export const Rating = () => {
  const [ratingState, setRatingState] = useState<number>(0);

  const stars: boolean[] = [true, true, false, false, false];
  // for ( let i = 0; i > 5; i++ )

  return stars.map((val: boolean, index: number) => {
    <Button>{val ? <Text>★</Text> : <Text>☆</Text>}</Button>;
  });
};
