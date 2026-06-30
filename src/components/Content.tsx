import {Card,CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import PassCard from "./_components/PassCard";
import PassSettings from "./_components/PassSettings";

const Content = () => {
    return (
    <Tabs defaultValue="senha" className="flex p-6">
      <TabsList>
        <TabsTrigger value="senha">Gerar Senha</TabsTrigger>
        {/*<TabsTrigger value="analytics">Analytics</TabsTrigger>*/}
      </TabsList>
      <TabsContent value="senha">
        <Card>
          <CardHeader>
            <CardTitle>Gerador de Senha</CardTitle>
            <CardDescription>
              Gere senhas seguras e personalizadas com nossa ferramenta.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground p-2 pb-0">
            <PassCard />
          </CardContent>
          <CardContent className="text-sm text-muted-foreground p-2 pt-0">
            <PassSettings />
          </CardContent>
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