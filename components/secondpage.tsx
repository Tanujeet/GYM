import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const desc = [
  { title: "Strength training" },
  { title: "Strength training" },
  { title: "Strength training" },
  { title: "Strength training" },
];

const Secondpage = () => {
  return (
    <section>
      <div className="mt-20">
        <h1 className="text-3xl text-center">We offer something to everbody</h1>
      </div>
      <div className="flex  mt-10 justify-around">
        {desc.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Secondpage;
