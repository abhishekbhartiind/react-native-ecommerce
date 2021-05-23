import { useTheme, BoxProps } from "@shopify/restyle";
import React, { ReactNode } from "react";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    TextStyle,
} from "react-native";
import { Box } from "../../../utils/restyle";
import { Theme } from "../../../utils/theme";


interface InputProps extends BoxProps<Theme> {
    placeholder: string;
    icon?: ReactNode;
    textInputStyle?: StyleProp<TextStyle>;
    textInputProps?: TextInputProps;
    password?: boolean;
    elevation?: number
}

const Input: React.FC<InputProps> = ({
    placeholder,
    icon,
    textInputStyle,
    textInputProps,
    password,
    elevation
}) => {
    const theme = useTheme<Theme>();

    return (
        <Box
            backgroundColor="white"
            paddingHorizontal="m"
            marginVertical="s"
            paddingVertical="s"
            borderRadius="s"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            elevation={elevation ? elevation : 0}
        >
            <TextInput
                style={[styles.textInput, textInputStyle]}
                placeholder={placeholder}
                secureTextEntry={password}
                {...textInputProps}
            />
            {icon && icon}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        flexGrow: 1,
    },
});

export default Input;
