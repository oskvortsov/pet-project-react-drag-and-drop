import React from "react";

interface QuestionaryContainerProps {
}

function QuestionaryContainer(props: QuestionaryContainerProps) {
    console.log(props);
    return null;
}

export default React.memo(QuestionaryContainer);
