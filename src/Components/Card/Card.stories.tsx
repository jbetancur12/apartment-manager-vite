import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Default = ({ ...args }) => (
  <Card {...args}>
    <Card.Header>
      <Card.Header.Title>Soy el Header</Card.Header.Title>
    </Card.Header>
    <Card.Body>Soy el Body</Card.Body>
  </Card>
);
