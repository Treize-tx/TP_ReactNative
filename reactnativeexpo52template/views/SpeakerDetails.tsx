import React from "react";
import { Text } from "react-native";

interface SpeakerDetailsProps {
    speakerName: string;
}

const SpeakerDetails: React.FC<SpeakerDetailsProps> = ({ speakerName }) => {
    return (
        <Text>{speakerName}</Text>
    );
}

export default SpeakerDetails;