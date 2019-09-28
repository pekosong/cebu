import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Block from "./Block";
import Text from "./Text";
import { theme } from "../constants";
import StarRating from "react-native-star-rating";

export default Reviews = props => {
  const { review } = props;

  useEffect(() => {}, []);

  return (
    <TouchableOpacity>
      <Block style={{ marginVertical: 5 }}>
        <Block row space="between">
          <Block>
            <Text>{review.writer}</Text>
          </Block>
          <Block style={{ position: "absolute", right: 50 }}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={review.star}
              starSize={15}
              fullStarColor={theme.colors.accent}
              containerStyle={{ width: 20 }}
            />
          </Block>
        </Block>
        <Block style={{ marginTop: 5 }}>
          <Text bold>{review.comment}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  elementContainer: {
    borderRadius: 3,
    width: 250,
    height: 250,
    marginRight: 20
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 3
  }
});
