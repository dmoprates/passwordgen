import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

const PassStrength = () => {
    return ( 
        <div className="mx-auto grid w-full gap-3">
                    <Label htmlFor="passwordStrength">Força da Senha</Label>
                    <Slider
                    id="passwordStrength"
                    defaultValue={[8]}
                    max={32}
                    step={1}
                    className="mx-auto w-full"
                    />
                    <span className="text-sm text-muted-foreground">
                        fraca
                    </span>
                </div>
     );
}
 
export default PassStrength;