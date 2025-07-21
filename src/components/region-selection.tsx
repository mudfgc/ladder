import { Globe } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

export default function RegionSelection() {
    return (
        <Select defaultValue="europe">
            <SelectTrigger>
                <Globe />
                <SelectValue placeholder="region" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>regions</SelectLabel>
                    <SelectItem value="europe">europe</SelectItem>
                    <SelectItem value="na" disabled>north america</SelectItem>
                    <SelectItem value="sa" disabled>south america</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}