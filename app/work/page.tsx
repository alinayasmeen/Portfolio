import React from 'react'
import Link from 'next/link'
function work() {
  return (
    <div className='bg-gray-200 flex flex-col min-h-screen'>
        <section className='m-16 flex headline items-center justify-between'>
           <div className='w-1/2'> <h1 className='font-bold heading text-black'>Hello, I’m Mehmet Akif.<br/><br/></h1>
           <div className='vector font-bold text-4xl'>↓</div></div>
           <div className='w-1/2'> <h1 className='heading_2'>A senior-year design student who trying to specialize in 3D modeling & texturing.</h1></div>
        </section>

        {/* BODY */}
        <section className='Body1 m-16 flex items-center justify-between'>
            <div className='w-1/2'> <h3 className='heading_3'>01 / PROJECT NAME</h3>
            <p className='p1'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.


</p><p className='p2'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
<br />
<br />
<br />
<Link href='./Project' className='link'>More shots from this project ↗</Link></div>
           
            <div className='w-1/2'> <div className='thumbnail'></div></div>
        </section>

        <div className="border-t border-black sep_1 m-10 w-full"></div>
      {/* BODY 2 */}

        <section className='Body1 m-16 flex items-center justify-between'>
            <div className='w-1/2'> <h3 className='heading_3'>02 / PROJECT NAME</h3>
            <p className='p1'>Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
            </p><p className='p3'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
<br />
<br />
<br />
<Link href='./Project' className='link'>More shots from this project ↗</Link></div>
           
            <div className='w-1/2'> <div className='thumbnail'></div></div>
        </section>

        <div className="border-t border-black sep_1 m-10 w-full"></div>
      
      {/* BODY 3 */}
        <section className='Body1 m-16 flex items-center justify-between'>
            <div className='w-1/2'> <h3 className='heading_3'>03 / PROJECT NAME</h3>
            <p className='p1'>Experimental creature modeling for school project.



            </p><p className='p3'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
<br />
<br />
<br />
<Link href='./Project' className='link'>Project WIP</Link></div>
           
            <div className='w-1/2'> <div className='thumbnail'></div></div>
        </section>
        <div className="border-t border-black m-4 w-full"></div>
    </div>
  )
}

export default work

