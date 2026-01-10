import { SectionTitle, BulletList, OrderedList, SubBulletList, Introduction } from "../../components/ListRelated";

export default function Automotive() {
  return (
    <>
      <Introduction>
        Vacuum glass in cars is mainly about energy savings (critical for EVs),
        passenger comfort (thermal + acoustic), and enabling futuristic designs
        like panoramic roofs — all while keeping weight low.
      </Introduction>

      <OrderedList>
        <li>
          <SectionTitle>
            Electric Vehicles (EVs)
          </SectionTitle>

          <BulletList>
            <li>
              <SectionTitle>
                Energy Efficiency
              </SectionTitle>

              <SubBulletList>
                <li>
                  Heating and cooling the cabin is a major drain on EV batteries.
                </li>
                <li>
                  Vacuum glass reduces heat loss in winter and heat gain in
                  summer, meaning <strong>less energy used for HVAC</strong>,
                  which extends driving range.
                </li>
              </SubBulletList>
            </li>

            <li>
              <SectionTitle>
                Lightweight Alternative to Multi-layer Glass
              </SectionTitle>

              <SubBulletList>
                <li>
                  Vacuum glazing provides the same or better insulation as
                  laminated or triple glazing but in a{" "}
                  <strong>thinner, lighter package</strong>, reducing overall
                  vehicle weight and improving efficiency.
                </li>
              </SubBulletList>
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Comfort &amp; Noise Reduction
          </SectionTitle>

          <BulletList>
            <li>
              <SectionTitle>
                Thermal Comfort
              </SectionTitle>

              <SubBulletList>
                <li>
                  Maintains stable interior temperatures without thick
                  insulation.
                </li>
                <li>
                  Reduces glare and prevents frost/condensation on windows.
                </li>
              </SubBulletList>
            </li>

            <li>
              <SectionTitle>
                Acoustic Insulation
              </SectionTitle>

              <SubBulletList>
                <li>
                  The vacuum gap blocks external noise (traffic, wind, engine
                  sounds), improving cabin quietness — especially important for
                  luxury vehicles and EVs where engine noise is minimal.
                </li>
              </SubBulletList>
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Safety &amp; Visibility
          </SectionTitle>

          <BulletList>
            <li>
              <SectionTitle>
                Defogging and Defrosting
              </SectionTitle>

              <SubBulletList>
                <li>
                  Better thermal insulation keeps inner surfaces closer to
                  cabin temperature, reducing fogging.
                </li>
              </SubBulletList>
            </li>

            <li>
              <SectionTitle>
                Large Transparent Surfaces
              </SectionTitle>

              <SubBulletList>
                <li>
                  Automakers experimenting with panoramic roofs and larger
                  glass areas can use vacuum glazing to avoid heat build-up.
                </li>
              </SubBulletList>
            </li>
          </BulletList>
        </li>
      </OrderedList>
    </>
  );
}