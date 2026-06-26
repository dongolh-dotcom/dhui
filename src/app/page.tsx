import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import "./globals.css"
import Navbar from "@/components/own/Navbar"
import { Banner } from 'fumadocs-ui/components/banner';
import CopyButton from "@/components/own/ui/CopyButton";

// ui collection 
import   Glslhills   from "@/registry/default/examples/glsl-hills-demo"
import   Floating   from "@/registry/default/examples/floating-label-input-demo"
import { ParticleCanvas } from "@/registry/default/ui/particle-canvas-1"
import { WavePath } from "@/registry/default/ui/wave-path";

import Link from "next/link"


// You are free to implement this with your own design as needed.

export default function Home() {
  const installCommandfloatinglabel = "npx shadcn@latest add https://dhui-bay.vercel.app/r/floating-label-input.json"; 
    const installCommandGlslhills = "npx shadcn@latest add https://dhui-bay.vercel.app/r/glsl-hills.json"; 
        const installCommandParticle = "npx shadcn@latest add https://dhui-bay.vercel.app/r/glsl-hills.json"; 
                const installCommandWave = "npx shadcn@latest add https://dhui-bay.vercel.app/r/wave-path.json"; 

  
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <Navbar/>
      <header className="flex flex-col gap-1">
        
      <Banner 
          id="v4-migration-alert" 
          variant="rainbow"
          className="font-bold text-center"
        >
          🚀 Dongolheart-Ui Custom Registry 🚀
        </Banner>



        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
{/* custom registry start from here  */}

{/* first items or components start */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
       {/* top header start here  */}
          <div className="flex items-center justify-between">
           
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          {/* top header end here */}
          {/* main content start here  */}
          <div className="grid  items-center justify-center min-h-[300px] relative">
            
             <header>
 <h2 className="text-sm text-muted-foreground sm:pl-3 text-center">
              A simple hello world component
            </h2>
             </header>
            
            <Floating/>
           {/* <details>
            <summary>
              i have keys but no doors. i have  space but no room. you can enter
            </summary>
            A keyboard.
          </details> */}
      

    <div className="max-w-xl mx-auto p-6">
      <h3 className="text-lg font-semibold mb-2">Installation</h3>
      <p className="text-zinc-400 text-sm mb-4">Run this package command inside your root directory:</p>
      
      <CopyButton code={installCommandfloatinglabel} language="bash" />


    </div>
          </div>
          {/* main content end here */}
        <footer className="text-center">
  <Link href="docs/introduction"> <details>
  <summary>Click to view more information</summary>
  
  
</details>
</Link> 
        </footer>
        </div>

{/* first items or components end */}


{/* second items start */}
        <div className="flex flex-col gap-4  rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
          
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div >
            <main >
  <header>
       <Banner 
          id="v4-migration-alert" 
          variant="rainbow"
          className="font-bold text-center"
        >
          🚀 Dongolheart-Ui Custom Registry 🚀
        </Banner>
     </header>
  <section className="grid  items-center justify-center min-h-[300px] relative">
<Glslhills/>
<article className="max-w-xl mx-auto p-6">
      <h3 className="text-lg font-semibold mb-2">Installation</h3>
      <p className="text-zinc-400 text-sm mb-4">Run this package command inside your root directory:</p>
      
      <CopyButton code={installCommandGlslhills } language="bash" />
</article>
         <footer className="text-center">
  <Link href="docs/introduction"> <details>
  <summary>Click to view more information</summary>
  
  
</details>
</Link> 
        </footer>
  </section>
</main>
          </div>
        </div>
        {/* second items end */}

 {/* Third items start */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Hover your Mouse anywhere particle follow 
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <section>
               <ParticleCanvas />
          
            </section>
            
           
          </div>
          <article className="max-w-xl mx-auto p-6">
      <h3 className="text-lg font-semibold mb-2">Installation</h3>
      <p className="text-zinc-400 text-sm mb-4">Run this package command inside your root directory:</p>
      
      <CopyButton code={installCommandParticle } language="bash" />
</article>
         <footer className="text-center">
  <Link href="docs/introduction"> <details>
  <summary>Click to view more information</summary>
  
  
</details>
</Link> 
        </footer>
        </div>
{/* third end */}

{/* fourth items  */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
            Hover line 
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            < WavePath/>
          </div>
                  <article className="max-w-xl mx-auto p-6">
      <h3 className="text-lg font-semibold mb-2">Installation</h3>
      <p className="text-zinc-400 text-sm mb-4">Run this package command inside your root directory:</p>
      
      <CopyButton code={installCommandWave } language="bash" />
</article>
         <footer className="text-center">
  <Link href="docs/introduction"> <details>
  <summary>Click to view more information</summary>
  
  
</details>
</Link> 
        </footer>
        </div>

        {/* fourth items end  */}
      </main>
    </div>
  )
}
