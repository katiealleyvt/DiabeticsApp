'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table } from "../classes/interfaces";
interface SearchBarComponentProps {
  setSearch: (search: string) => void;
  setResults: (table: Table) => void;
}

export default function SearchBarComponent({setSearch, setResults} : SearchBarComponentProps) {


  function searchAPI(formData: FormData){
    const searchVal = formData.get('search')?.toString();
    setSearch(searchVal ?? '');
    setResults({
      rows: [
        {
          columns: [
            {value: searchVal ?? ''},
            {value: '5.7'},
            {value: '35g'},
            {value: 'Generic'},
            {value: ''}

          ]
        },
        {
          columns: [
            {value: searchVal ?? ''},
            {value: '3.5'},
            {value: '80g'},
            {value: 'Generic'},
            {value: ''}

          ]
        }
      ]
    })
  }
  return (
    <div className="d-inline">
      <form action={searchAPI}>
        <Label htmlFor="search">Search</Label>
        <Input type="search" id="search" name="search"/>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
