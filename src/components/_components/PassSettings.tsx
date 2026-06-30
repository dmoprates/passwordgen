"use client"
import * as React from "react"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Switch } from "../ui/switch"
import { Separator } from "../ui/separator"

const PassSettings = () => {

    const [value, setValue] = React.useState([8])

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Configuração da senha</CardTitle>
            </CardHeader>
            <CardContent>
                <Separator className="mb-4" />
                <Field className="w-full max-w-xs">
                    <FieldTitle>Quantidade de caracteres</FieldTitle>
                    <FieldDescription>
                        Defina a quantidade de caracteres desejada
                    </FieldDescription>
                    <Slider
                        value={value}
                        onValueChange={(value) => setValue(value as [number])}
                        max={32}
                        min={0}
                        step={1}
                        className="mt-2 w-full"
                        aria-label="Price Range"
                    />
                    <FieldDescription>
                        {value[0]} caracteres
                    </FieldDescription>
                    </Field>
                    <Separator className="mt-4 mb-4" />
                    <div className="flex flex-row justify-around">
                        <Field orientation="horizontal" className="w-fit pt-4">
                            <FieldLabel htmlFor="maiusc">Maiúsculas</FieldLabel>
                            <Switch id="maiusc" />
                        </Field>

                        <Field orientation="horizontal" className="w-fit pt-4">
                            <FieldLabel htmlFor="minusc">Minúsculas</FieldLabel>
                            <Switch id="minusc" />
                        </Field>

                        <Field orientation="horizontal" className="w-fit pt-4">
                            <FieldLabel htmlFor="simb">Símbolos</FieldLabel>
                            <Switch id="simb" />
                        </Field>
                    </div>
                    
            </CardContent>
        </Card>
     );
}
 
export default PassSettings;