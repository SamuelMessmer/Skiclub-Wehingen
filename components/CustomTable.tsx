import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const daten = [
  {
    Uhrzeit: "09:30",
    Strecke: "Schülerlauf",
    Länge: "1,5 Km",
    Jahrgang: "2009 - 2016",
    Startgeld: "4,-- €",
  },
  {
    Uhrzeit: "09:50",
    Strecke: "Bambinilauf",
    Länge: "300 m",
    Jahrgang: "2020 - 2022",
    Startgeld: "kostenlos",
  },
  {
    Uhrzeit: "10:00",
    Strecke: "Kidslauf",
    Länge: "500 m",
    Jahrgang: "2017 - 2019",
    Startgeld: "kostenlos",
  },
  {
    Uhrzeit: "11:00",
    Strecke: "Hauptlauf",
    Länge: "11,2 Km",
    Jahrgang: "2009 u. älter",
    Startgeld: "8,-- €",
  },
  {
    Uhrzeit: "11:00",
    Strecke: "Jedermannlauf",
    Länge: "6,0 Km",
    Jahrgang: "2009 u. älter",
    Startgeld: "6,-- €",
  },
  {
    Uhrzeit: "11:00",
    Strecke: "Nordic-Walker",
    Länge: "7,8 Km",
    Jahrgang: "2009 u. älter",
    Startgeld: "6,-- €",
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="font-bold text-xl text-white">
          <TableHead className="font-bold text-xl text-white">Uhrzeit</TableHead>
          <TableHead className="font-bold text-xl text-white">Strecke</TableHead>
          <TableHead className="font-bold text-xl text-white">Länge</TableHead>
          <TableHead className="font-bold text-xl text-white ">Jahrgang</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {daten.map((data) => (
          <TableRow key={data.Jahrgang}>
            <TableCell className="font-medium">{data.Uhrzeit}</TableCell>
            <TableCell className="font-medium">{data.Strecke}</TableCell>
            <TableCell >{data.Länge}</TableCell>
            <TableCell >{data.Jahrgang}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
