import { SectionTitle, BulletList, OrderedList, Introduction } from "../../components/ListRelated";

export default function Agriculture() {
  return (
    <>
      <Introduction>
        Vacuum glazing helps agriculture by creating energy-efficient,
        light-transmitting environments for crops, animals, and food storage
        — especially useful in greenhouses, vertical farms, and cold storage.
      </Introduction>

      <OrderedList>
        <li>
          <SectionTitle>
            Greenhouses &amp; Controlled Environment Agriculture (CEA)
          </SectionTitle>

          <BulletList>
            <li>
              <strong>
                Thermal Insulation:
              </strong>{" "}
              Traditional greenhouses with single glazing or plastic sheeting
              lose a lot of heat in winter. Vacuum glazing dramatically
              reduces this, lowering heating costs.
            </li>
            <li>
              <strong>
                Light Transmission:
              </strong>{" "}
              Despite having high insulation, vacuum glazing can still allow{" "}
              <strong>
                &gt;70% visible light transmittance
              </strong>
              , which is critical for photosynthesis.
            </li>
            <li>
              <strong>
                Season Extension:
              </strong>{" "}
              Farmers can grow crops for longer periods or in colder climates
              with less energy input.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Vertical Farming &amp; Indoor Agriculture
          </SectionTitle>

          <BulletList>
            <li>
              Used in{" "}
              <strong>
                building-integrated farms
              </strong>{" "}
              or rooftop farms to insulate growing areas without sacrificing
              natural daylight.
            </li>
            <li>
              Helps maintain{" "}
              <strong>
                stable microclimates
              </strong>
              , reducing reliance on artificial lighting and HVAC systems.
            </li>
          </BulletList>
        </li>
      </OrderedList>
    </>
  )
}