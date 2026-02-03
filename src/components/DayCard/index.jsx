import {
  Card,
  DateText,
  Divider,
  TimesContainer,
  TimeButton
} from "./style";

export default function DayCard(props) {
  return (
    <Card>
      <DateText>{props.date}</DateText>

      <Divider />

      <TimesContainer>
        {props.times.map((time, index) => (
          <TimeButton key={index}>
            {time}
          </TimeButton>
        ))}
      </TimesContainer>
    </Card>
  );
}
