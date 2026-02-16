import ScrollPolyfill from "./src/ScrollPolyfill";
import { TitleCard } from "./src/TitleCard";
import { ProjectPreviewCard } from "./src/ProjectPreviewCard";

export default function Main() {

  return (
    <>
      <ScrollPolyfill></ScrollPolyfill>
      <TitleCard></TitleCard>
      <SectionDivider></SectionDivider>
      <ProjectSection>
        <ProjectPreviewCard
          project_name="Rotary Engine Compression Tester"
          project_description="A hardware and software tool used to measure compression across individual chambers in a rotary engine for diagnostics and engine health analysis."
          project_description_subtext="My RX8 was, in fact, not okay..."
          image_url="/images/RotaryCompressionTesterThumbnail.png"
          technologies={[ARDUINO_CARD, CPP_CARD, B13_CARD]}
          github_link="https://github.com/macklosky211/rotary-compression-tester"
        />
        <ProjectPreviewCard
          project_name="Mouflon.dev"
          project_description={<><span>A full-stack SaaS platform built to collect, store, and visualize telemetry data from Hytale servers, designed with scalability and heavy database usage in mind. Created with my brother: <a href="https://benklosky.com" target="_blank">@BenKlosky.com</a> </span></>}
          project_description_subtext="Lots of SQL."
          image_url="/images/Mouflon_thumbnail.png"
          technologies={[HYTALE_CARD, JAVA_CARD, POSTGRES_CARD, CLICKHOUSE_CARD]}
          project_link="https://mouflon.dev"
        />
        <ProjectPreviewCard
          project_name="Gladiator Arena Browser Game"
          project_description="A browser-based arena fighting game focused on momentum-driven movement and combo-based combat, created as part of a school project."
          // project_description_subtext=""
          image_url="/images/gladiator_arena_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD, ADOBE_SUBSTANCE_CARD]}
          project_link="https://hollowhunts.itch.io/cs-325-project"
          github_link="https://github.com/macklosky211/cs-325-project"
        />
        <ProjectPreviewCard
          project_name="Hytale Mod's Collection"
          project_description="A collection of Hytale mods developed to extend gameplay systems and improve server customization. Features projects such as daily login rewards, and loot boxes."
          project_description_subtext="400+ users!"
          image_url="/images/hytale_mods_thumbnail.png"
          technologies={[HYTALE_CARD, JAVA_CARD]}
          project_link="https://www.curseforge.com/members/katsi/projects"
          github_link="https://github.com/macklosky211/HytaleModsCollection"
        />
        <ProjectPreviewCard
          project_name="GMTK Game Jam - F.A.M"
          project_description={<span>A complete game built in four days for the GMTK Game Jam, focusing on a single core mechanic and rapid iteration under tight time constraints. Created with my friend <a href="https://github.com/Abarr27" target="_blank">@Abarr27</a></span>}
          project_description_subtext="Yes, I did the music. Deadlines were involved... I'm sorry..."
          image_url="/images/FAM_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD, ADOBE_SUBSTANCE_CARD]}
          project_link="https://hollowhunts.itch.io/forced-action-manipulator"
        />
        <ProjectPreviewCard
          project_name="Stratos"
          project_description="A movement-based arena shooter featuring peer-to-peer multiplayer, built to explore fast traversal mechanics and networking fundamentals."
          project_description_subtext="P2P networking included!"
          image_url="/images/Stratos_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD]}
          github_link="https://github.com/macklosky211/Stratos"
        />
        <ProjectPreviewCard
          project_name="Fair Role Distributor Discord Bot"
          project_description="A Discord bot that fairly distributes roles using a time based priority system."
          project_description_subtext="There’s a full priority system!"
          image_url="/images/Fair_Role_Distro_thumbnail.png"
          technologies={[DISCORD_CARD, JAVASCRIPT_CARD]}
          github_link="https://github.com/macklosky211/Fair-Role-Distributor-Discord-Bot"
        />
        
      </ProjectSection>

    </>
  );


}

/* Languages */
const CPP_CARD = { name: "C++", bg_color: "#4A6FA5", txt_color: "#EAF6FF" };
const JAVA_CARD = { name: "Java", bg_color: "#4A6FA5", txt_color: "#EAF6FF" };
const GDSCRIPT_CARD = { name: "GDscript", bg_color: "#4A6FA5", txt_color: "#EAF6FF" };
const JAVASCRIPT_CARD = { name: "JavaScript", bg_color: "#4A6FA5", txt_color: "#EAF6FF" };

/* Databases / Tools */
const POSTGRES_CARD = { name: "Postgres", bg_color: "#6A8F3D", txt_color: "#EAF6FF" };
const CLICKHOUSE_CARD = { name: "Clickhouse", bg_color: "#6A8F3D", txt_color: "#EAF6FF" };

/* Hardware */
const B13_CARD = { name: "13B Renesis", bg_color: "#2F8F83", txt_color: "#EAF6FF" };

/* Tools */
const BLENDER_CARD = { name: "Blender", bg_color: "#6B5B95", txt_color: "#EAF6FF" };
const ADOBE_SUBSTANCE_CARD = { name: "Adobe Substance Painter", bg_color: "#6B5B95", txt_color: "#EAF6FF" };

/* Platforms / Libraries*/
const ARDUINO_CARD = { name: "Arduino", bg_color: "#9C6B2F", txt_color: "#EAF6FF" };
const DISCORD_CARD = { name: "Discord.js", bg_color: "#9C6B2F", txt_color: "#EAF6FF" };
const HYTALE_CARD = { name: "Hytale", bg_color: "#9C6B2F", txt_color: "#EAF6FF" };
const GODOT_CARD = { name: "Godot", bg_color: "#9C6B2F", txt_color: "#EAF6FF" };



type ProjectSectionProps = {
  children?: React.ReactNode;
}

export function ProjectSection({ children }: ProjectSectionProps) {
  return (
    <section id="ProjectSection" className="w-screen bg-primary-blue-500 text-primary-blue-200 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-primary-blue-100">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="w-screen h-32 bg-linear-to-b from-primary-blue-400 to-primary-blue-500"></div>
  )
}
