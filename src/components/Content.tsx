"use client";

import {Card,CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import { PasswordDisplay } from "@/components/PasswordDisplay";
import { PasswordOptions } from "@/components/PasswordOptions";
import { usePasswordGenerator } from "@/lib/usePasswordGenerator";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";

const Content = () => {

  const {
    password,
    options,
    security,
    copied,
    generate,
    copyToClipboard,
    updateOption,
  } = usePasswordGenerator();

    return (
    <Tabs defaultValue="senha" className="flex p-6 min-h-screen">
      <TabsList>
        <TabsTrigger value="senha">Gerar Senha</TabsTrigger>
        {/*<TabsTrigger value="analytics">Analytics</TabsTrigger>*/}
      </TabsList>
      <TabsContent value="senha">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Gerador de Senha</CardTitle>
            <CardDescription>
              Gere senhas seguras e personalizadas com nossa ferramenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground p-2 pb-0">
            {/* Password Display */}
            <PasswordDisplay
              password={password}
              security={security}
              copied={copied}
              onCopy={copyToClipboard}
              onRegenerate={generate}
            />
          </CardContent>
          <CardContent className="text-sm text-muted-foreground p-2 pt-0">
            {/* Options */}
            <PasswordOptions
              options={options}
              onLengthChange={(val) => updateOption("length", val)}
              onToggle={(key, val) => updateOption(key, val)}
            />
          </CardContent>
            {/* Copy CTA */}
            <div className="flex justify-center pt-2">
              <Button
                size="lg"
                onClick={copyToClipboard}
                className="min-w-50 gap-2 text-base font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copiar senha
                  </>
                )}
              </Button>
            </div>
        </Card>
      </TabsContent>
      {/*<TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Page views are up 25% compared to last month.
          </CardContent>
        </Card>
      </TabsContent>*/}
    </Tabs>
  )
}
 
export default Content;