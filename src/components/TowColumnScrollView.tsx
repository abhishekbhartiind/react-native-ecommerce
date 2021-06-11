import React from "react";

import { BoxProps, useTheme } from "@shopify/restyle";
import { Box, Text } from "../utils/restyle";
import { Theme } from "../utils/theme";
import { Product } from "../redux/data_types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { SharedElement } from "react-navigation-shared-element";
import { Image } from "react-native";

interface TowColumnScrollViewProps extends BoxProps<Theme> {
    width: number;
    products: Product[];
}

const TowColumnScrollView: React.FC<TowColumnScrollViewProps> = ({
    width,
    products,
    ...rest
}) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation();
    const PRODUCT_WIDTH = width / 2 - theme.spacing.m * 2;
    const right_products = products.filter((p) => p.id % 2 !== 0);
    const left_products = products.filter((p) => p.id % 2 === 0);
    return (
        <Box
            flexDirection="row"
            justifyContent="center"
            width={width}
            {...rest}
        >
            <Box>
                {left_products.map((p) => (
                    <Box
                        elevation={10}
                        key={p.id}
                        width={PRODUCT_WIDTH}

                        bg="white"
                        borderRadius="m"
                        overflow="hidden"
                        marginBottom="s"
                    >
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() =>
                                navigation.navigate("Shop_Product_Detail", {
                                    item: p,
                                })
                            }
                        >
                            <SharedElement id={`image-${p.id}`}>
                                <Image
                                    style={{
                                        width: PRODUCT_WIDTH,
                                        height: 100,

                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{ uri: p.thumbnail! }}
                                />
                            </SharedElement>
                        </TouchableOpacity>

                        <Box p="m">
                            <Text variant="small" fontWeight="bold">
                                {p.name}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box style={{transform: [{translateY: 20}]}}>
                {right_products.map((p) => (
                    <Box
                        elevation={10}
                        key={p.id}
                        width={PRODUCT_WIDTH}
                        marginLeft="m"
                        bg="white"
                        borderRadius="m"
                        overflow="hidden"
                        marginBottom="s"
                    >
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() =>
                                navigation.navigate("Shop_Product_Detail", {
                                    item: p,
                                })
                            }
                        >
                            <SharedElement id={`image-${p.id}`}>
                                <Image
                                    style={{
                                        width: PRODUCT_WIDTH,
                                        height: 100,

                                        overflow: "hidden",
                                    }}
                                    resizeMode="cover"
                                    source={{ uri: p.thumbnail! }}
                                />
                            </SharedElement>
                        </TouchableOpacity>

                        <Box p="m">
                            <Text variant="small" fontWeight="bold">
                                {p.name}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TowColumnScrollView;
