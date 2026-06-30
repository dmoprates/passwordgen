import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import PassStrength from "./PassStrength";

const PassCard = () => {
    return ( 
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Senha Gerada</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <PassStrength />                
            </CardFooter>
            </Card>
     );
}
 
export default PassCard;