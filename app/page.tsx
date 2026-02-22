import ScrollPolyfill from "./src/ScrollPolyfill";
import { TitleCard } from "./src/TitleCard";
import { PreviewCardLink, ProjectPreviewCard } from "./src/ProjectPreviewCard";
import Footer from "./src/Footer";

export default function Main() {
  return (
    <>
      <ScrollPolyfill></ScrollPolyfill>
      <TitleCard></TitleCard>
      <ProjectSection>
        <ProjectPreviewCard
          project_name="Rotary Engine Compression Tester"
          image_url="/images/RotaryCompressionTesterThumbnail.png"
          technologies={[ARDUINO_CARD, C_CARD, B13_CARD]}
          github_link="https://github.com/macklosky211/rotary-compression-tester"
          preview_content={{
            project_description: "A hardware and software tool used to measure compression across individual chambers in a rotary engine for diagnostics and engine health analysis.",
            project_description_subtext: "My RX8 was, in fact, not okay..."
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A custom Arduino-based diagnostic tool for measuring compression across individual
                chambers in rotary engines, providing precise health analysis for all kinds of rotary engines.
                This project was created from necessity when I purchased my RX8.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Rotary engines require specialized compression testing due to their unique mechanics.
                  Each rotor has three chambers that must be measured individually, which makes standard compression
                  testers a nightmare to use for this. The real goal of this project was to save money instead of
                  taking my car to a dealership to do this test for me.
                </p>
                <h3 className="text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Arduino-Nano microcontroller reads pressure sensor data in real-time during engine cranking.
                  The data is then processed and filtered to identify peak compression values for each chamber.
                  The system accounts for rotary-specific timing patterns.
                </p>
                <h3 className="text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Real-time pressure reading during cranking, automatic chamber isolation and peak detection,
                  comparative analysis across all chambers, and easy data presentation for ease of use.
                  Hardware designed for easy mounting and durability in automotive environments (as long as you weld the parts together skillfully).
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="Mouflon.dev"
          image_url="/images/Mouflon_thumbnail.png"
          technologies={[HYTALE_CARD, JAVA_CARD, POSTGRES_CARD, CLICKHOUSE_CARD]}
          project_link="https://mouflon.dev"
          preview_content= {{
            project_description: <>
                                    <span>
                                      A full-stack SaaS platform built to collect, store, and visualize telemetry 
                                      data from Hytale servers, designed with scalability and heavy database usage in mind. 
                                      Created with my brother: <PreviewCardLink href="https://benklosky.com" target="_blank">@BenKlosky.com</PreviewCardLink> 
                                    </span>
                                  </>,
            project_description_subtext: "Lots of SQL."
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A full stack telemetry and analytics SaaS for Hytale server infrastructure,
                built to handle high-volume gameplay data at scale. Developed collaboratively
                with my brother <PreviewCardLink href="https://benklosky.com" target="_blank">@BenKlosky.com</PreviewCardLink>.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Game servers generate massive streams of telemetry such as player movements, block interactions,
                  entity spawning, and custom events, which all require real-time capture, storage, and analysis
                  while maintaining server stability and performance.
                </p>

                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Hybrid database architecture: PostgreSQL for web based data and transactions,
                  ClickHouse for time-series analytics across millions of events. Custom Java plugin
                  handles batching and processing data before storage while maintaining stability in
                  case of server failures.
                </p>

                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Real-time dashboard with live data visualizations, materialized views for common queries,
                  an aggressive caching layer, and failure handling for when the servers are overloaded.
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="Gladiator Arena Browser Game"
          image_url="/images/gladiator_arena_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD, ADOBE_SUBSTANCE_CARD]}
          project_link="https://hollowhunts.itch.io/cs-325-project"
          github_link="https://github.com/macklosky211/cs-325-project"
          preview_content={{
            project_description: "A browser-based arena fighting game focused on momentum-driven movement and combo-based combat, created as part of a school project."
          // project_description_subtext:""
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A browser-based arena fighting game built in Godot, featuring momentum-driven movement
                and combo-based combat mechanics. Created as a school project to explore game design
                principles.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Build a responsive combat system where player movement is based on momentum,
                  with combos that reward timing and positioning. The challenge was the short amount
                  of time I had to create the project (~1 week).
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Godot engine with GDScript for game logic and physics calculations. Custom 3D models
                  created in Blender with materials textured in Adobe Substance Painter. Implemented a full state 
                  machine for combat flow and momentum system that carries velocity between moves for fluid combos.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Physics-based momentum system where attacks effect velocity, combo chains
                  with timing windows, arena-based combat, and browser deployment for easy accessibility. 
                  Optimized for web performance while maintaining visual quality.
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="Hytale Mod's Collection"
          image_url="/images/hytale_mods_thumbnail.png"
          technologies={[HYTALE_CARD, JAVA_CARD]}
          project_link="https://www.curseforge.com/members/katsi/projects"
          github_link="https://github.com/macklosky211/HytaleModsCollection"
          preview_content={{
            project_description: "A collection of Hytale mods developed to extend gameplay systems and improve server customization. Features projects such as daily login rewards, and loot boxes.",
            project_description_subtext: "500+ users!"
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A collection of Hytale mods developed to extend gameplay systems and improve server
                customization options. Downloaded by 500+ users across the Hytale modding community,
                featuring systems like daily login rewards and loot boxes.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Provide server administrators with tools to enhance player engagement and retention. 
                  Each mod needed to be configurable, performant, and compatible with other mods while 
                  maintaining clean integration with Hytale&apos;s core systems.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Built using Hytale&apos;s modding API with Java, using event-driven architecture for
                  game hooks and server interactions. Implemented persistent data storage for player
                  progress, configurable reward systems, and privileged commands for runtime adjustments.
                  Each mod follows modular design principles for easy maintenance and updates.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Daily login reward system with login-streak tracking, customizable loot box mechanics with
                  weighted drop tables, extensive configuration files for server-specific tuning, and
                  permission-based admin controls. All mods published publicly on CurseForge.
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="GMTK Game Jam - F.A.M"
          image_url="/images/FAM_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD, ADOBE_SUBSTANCE_CARD]}
          project_link="https://hollowhunts.itch.io/forced-action-manipulator"
          preview_content={{
            project_description: 
                                <span>
                                  A puzzle game built in four days for the GMTK Game Jam.
                                  Created with my friend 
                                  <PreviewCardLink href="https://github.com/Abarr27" target="_blank">@Abarr27</PreviewCardLink>
                                </span>,
            project_description_subtext: "I'm sorry about the 'music' I created..."
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A complete game built in four days for the 2025 GMTK Game Jam, focusing on a single core
                mechanic and rapid iteration under extreme time constraints. Developed collaboratively
                with my friend <PreviewCardLink href="https://github.com/Abarr27" target="_blank">@Abarr27</PreviewCardLink>.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Create a polished, playable game within the 96-hour jam window while adhering to GMTK&apos;s
                  theme &quot;LOOPS&quot;. The challenge was scoping a mechanic deep enough to be interesting but simple enough to implement,
                  test, and iterate on within the deadline.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Built in Godot using GDScript for rapid prototyping and iteration. Assets created in
                  Blender with quick texturing passes in Adobe Substance to maintain visual consistency
                  under time pressure. Focused on core gameplay loop first, then layered polish and feedback
                  systems as time allowed. Featuring the classic NES color palette!
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Core mechanic centered around the jam theme &quot;LOOPS&quot;, tight gameplay loop designed for replayability,
                  custom 3D assets, original music, and full deployment to itch.io for public play.
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="Stratos"
          image_url="/images/Stratos_thumbnail.png"
          technologies={[GODOT_CARD, GDSCRIPT_CARD, BLENDER_CARD]}
          github_link="https://github.com/macklosky211/Stratos"
          preview_content={{
            project_description: "A movement-based arena shooter featuring peer-to-peer multiplayer, built to explore fast traversal mechanics and networking fundamentals.",
            project_description_subtext: "P2P networking included!"
          }}
          expanded_content={{
            subtitle_description: (
              <p>
                A movement-based arena shooter featuring peer-to-peer multiplayer networking,
                built to explore fast-paced traversal mechanics and low-level networking fundamentals.
                Focuses on movement systems and the challenges of synchronizing game state across players.
              </p>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Create a responsive movement system where speed and momentum are central to gameplay,
                  while implementing P2P networking for state synchronization, and latency compensation.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Built in Godot with GDScript handling both gameplay logic and networking layer.
                  Implemented custom P2P protocol for player state synchronization,
                  with client-side interpolation to mask latency. 3D assets modeled
                  in Blender with focus on an iterative and modular design. Movement system uses
                  physics based velocity calculations for responsive, momentum-driven traversal.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Fast-paced movement mechanics with air control and momentum preservation, peer-to-peer
                  multiplayer with automatic host migration, arena-based combat with projectile weapons.
                </p>
              </>
            )
          }}
        />
        <ProjectPreviewCard
          project_name="Fair Role Distributor Discord Bot"
          image_url="/images/Fair_Role_Distro_thumbnail.png"
          technologies={[DISCORD_CARD, JAVASCRIPT_CARD]}
          github_link="https://github.com/macklosky211/Fair-Role-Distributor-Discord-Bot"
          preview_content={{
            project_description: "A Discord bot that fairly distributes roles using a time based priority system.",
            project_description_subtext: "There's a full priority system!"
          }}
          expanded_content={{
            subtitle_description: (
              <>
                <p>
                  A Discord bot that automates role distribution using a time-based priority system,
                  ensuring fair rotation among members competing for limited roles. Designed to eliminate
                  bias and disputes in communities where in-game roles need to be distributed equitably.
                </p>
                <p className="pt-5">
                  Admittedly this project was created for the release of Marvel Rivals when role queue did not exist...
                </p>
              </>
            ),
            project_description: (
              <>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Goals</h3>
                <p>
                  Solve the problem of manual role assignment in Discord servers where multiple members
                  want access to limited roles whether for game slots, moderator positions, or event
                  participation.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Technical Approach</h3>
                <p>
                  Built with Discord.js in Node.js. The bot monitors role changes,
                  maintains a queue system based on time since last assignment, and handles automatic
                  rotation and filling of unfulfilled roles.
                </p>
                <h3 className="text-4xl text-primary-white-100 underline py-5 font-bold">Key Features</h3>
                <p>
                  Time-based priority queue that tracks role history per member, with automatic role rotation and filling for unwanted roles.
                </p>
              </>
            )
          }}
        />
        
      </ProjectSection>
      <Footer></Footer>
    </>
  );


}

/* Languages */
const C_CARD = { name: "C", bg_color: "#4A6FA5", txt_color: "#eef7fa" };
const JAVA_CARD = { name: "Java", bg_color: "#4A6FA5", txt_color: "#eef7fa" };
const GDSCRIPT_CARD = { name: "GDscript", bg_color: "#4A6FA5", txt_color: "#eef7fa" };
const JAVASCRIPT_CARD = { name: "JavaScript", bg_color: "#4A6FA5", txt_color: "#eef7fa" };

/* Databases / Tools */
const POSTGRES_CARD = { name: "Postgres", bg_color: "#6A8F3D", txt_color: "#eef7fa" };
const CLICKHOUSE_CARD = { name: "Clickhouse", bg_color: "#6A8F3D", txt_color: "#eef7fa" };

/* Hardware */
const B13_CARD = { name: "13B Renesis", bg_color: "#2F8F83", txt_color: "#eef7fa" };

/* Tools */
const BLENDER_CARD = { name: "Blender", bg_color: "#6B5B95", txt_color: "#eef7fa" };
const ADOBE_SUBSTANCE_CARD = { name: "Adobe Substance Painter", bg_color: "#6B5B95", txt_color: "#eef7fa" };

/* Platforms / Libraries*/
const ARDUINO_CARD = { name: "Arduino", bg_color: "#9C6B2F", txt_color: "#eef7fa" };
const DISCORD_CARD = { name: "Discord.js", bg_color: "#9C6B2F", txt_color: "#eef7fa" };
const HYTALE_CARD = { name: "Hytale", bg_color: "#9C6B2F", txt_color: "#eef7fa" };
const GODOT_CARD = { name: "Godot", bg_color: "#9C6B2F", txt_color: "#eef7fa" };



type ProjectSectionProps = {
  children?: React.ReactNode;
}

export function ProjectSection({ children }: ProjectSectionProps) {
  return (
    <section id="ProjectSection" className="w-full bg-primary-blue-500 text-primary-white-200 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold text-center mb-16 text-primary-white-100 text-shadow-lg">Projects</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {children}
        </div>
      </div>
    </section>
  );
}