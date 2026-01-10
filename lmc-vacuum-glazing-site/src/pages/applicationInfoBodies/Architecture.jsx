import { SectionTitle, BulletList, OrderedList, SubBulletList, Introduction } from "../../components/ListRelated";

export default function Architecture() {
  return (
    <>
      <Introduction>
        Vacuum glazing in architecture allows buildings to combine slim, 
        elegant glass designs with the insulation performance of triple glazing, 
        making it valuable for modern green buildings and sensitive heritage 
        renovations alike.
      </Introduction>

      <OrderedList>
        <li>
          <SectionTitle>
            Energy-Efficient Building Envelopes
          </SectionTitle>

          <BulletList>
            <li>
              <SectionTitle>
                Windows
              </SectionTitle>
              
              <SubBulletList>
                <li>
                  Provides <strong>triple-glazing performance</strong> (U-values
                  ~0.5–0.8 W/m<sup>2</sup>K) in a profile as thin as{" "}
                  <strong>6–12 mm</strong>, making it ideal for both new builds
                  and retrofits.
                </li>
                <li>
                  Allows architects to meet{" "}
                  <strong>net-zero energy building standards</strong> without
                  bulky frames.
                </li>
              </SubBulletList>

            </li>
            <li>
              <SectionTitle>
                Curtain Walls &amp; Facades
              </SectionTitle>
              
              <SubBulletList>
                <li>
                  High-rise and commercial buildings can use vacuum glazing for
                  large glazed surfaces without sacrificing energy performance.
                </li>
                <li>
                  Helps balance <strong>daylighting and thermal control</strong>.
                </li>
              </SubBulletList>

            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Heritage &amp; Renovation Projects
          </SectionTitle>

          <BulletList>
            <li>
              Because of its <strong>slimness and neutral appearance</strong>,
              vacuum glazing is used in <strong>historic buildings</strong> where
              double/triple glazing is not allowed.
            </li>
            <li>
              Fits into <strong>original window frames</strong> without changing
              the external appearance.
            </li>
          </BulletList>
        </li>
        
        <li>
          <SectionTitle>
            Skylights &amp; Roof Glazing
          </SectionTitle>

          <BulletList>
            <li>
              Maintains excellent insulation in horizontal or inclined glazing
              where heat loss/gain is usually high.
            </li>
            <li>
              Improves comfort under skylights while keeping spaces bright.
            </li>
          </BulletList>
        </li>
        
        
        <li>
          <SectionTitle>
            Acoustic Comfort in Urban Settings
          </SectionTitle>

          <BulletList>
            <li>
              The vacuum gap significantly reduces{" "}
              <strong>noise transmission</strong>.
            </li>
            <li>
              Used in residential towers, hotels, and offices near airports,
              highways, or busy city centres.
            </li>
          </BulletList>
        </li>


      </OrderedList>
    </>
  )
}