import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Block from "./Block";
import Text from "./Text";

import { theme } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

export default ReviewModal = props => {
  const { setReviewVisible, reviews, review, reviewCnt } = props;

  useEffect(() => {}, []);

  return (
    <Block padding={[theme.sizes.padding]}>
      <TouchableOpacity onPress={() => setReviewVisible(false)}>
        <Ionicons size={50} color={theme.colors.black} name="ios-close" />
      </TouchableOpacity>
      <Block row space="between" style={{ marginBottom: 45 }}>
        <Block>
          <Text h1 bold>
            후기
          </Text>
        </Block>
        <Block>
          <Text h4 right>
            {reviewCnt
              ? reviewCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
              : null}
            Reviews
          </Text>
          <Block style={{ position: "absolute", right: 62, top: 25 }}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={review}
              starSize={20}
              fullStarColor={theme.colors.accent}
              containerStyle={{ width: 30 }}
            />
          </Block>
        </Block>
      </Block>
      <ScrollView showsVerticalScrollIndicator={false}>
        {reviews
          ? reviews.map((review, idx) => <Reviews key={idx} review={review} />)
          : null}
        {reviews
          ? reviews.map((review, idx) => <Reviews key={idx} review={review} />)
          : null}
      </ScrollView>
    </Block>
  );
};

export const styles = StyleSheet.create({});