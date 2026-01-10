import { SectionTitle, BulletList, OrderedList, Introduction } from "../../components/ListRelated";
import WindowChangeImage from "../../assets/applications/heritageWindowChange.jpg"
import LightboxImage from "../../components/LightboxImage";

export default function Heritage() {
  return (
    <>
      <Introduction>
        Vacuum glazing allows heritage buildings to meet modern energy
        standards without compromising historic authenticity.
      </Introduction>

      <OrderedList>
        <li>
          <SectionTitle>
            Slim Profile
          </SectionTitle>

          <BulletList>
            <li>
              Vacuum glazing can be as thin as 6–8&nbsp;mm total thickness,
              similar to single-pane glass.
            </li>
            <li>
              This means it can fit into original timber or metal frames
              without major alterations — a key requirement in listed or
              protected buildings.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Preservation of Aesthetics
          </SectionTitle>

          <BulletList>
            <li>
              Since it looks almost identical to single glass, it doesn’t
              disrupt the historic appearance.
            </li>
            <li>
              Some products even offer low-iron glass or patterned replicas
              to match traditional looks.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Energy Performance
          </SectionTitle>

          <BulletList>
            <li>
              Despite being thin, it achieves insulation values similar to
              triple glazing (U-values ~0.5–0.8&nbsp;W/m²K).
            </li>
            <li>
              This dramatically reduces heat loss while retaining the
              building’s heritage character.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Acoustic Benefits
          </SectionTitle>

          <BulletList>
            <li>
              Many heritage buildings are in busy city centers; vacuum
              glazing also helps block outside noise.
            </li>
          </BulletList>
        </li>
      </OrderedList>

      {/* Original image is too big, so we use a div here to limit the size.
          Also add vertical margin so that it spaces out from the text above */}
      <div className="max-w-4xl mx-auto my-8">
        <LightboxImage image={WindowChangeImage} 
                       alt="Side-by-side comparison labeled ‘Before’ and ‘After’ 
                            showing a brick wall window, with the after image 
                            featuring a cleaner, more polished window frame."
        />
      </div>
    </>
  );
}