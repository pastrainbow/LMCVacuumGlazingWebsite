import Thumbnail from "../../assets/applications/freezer.resized.jpg"
import Post from "../../components/Post";
import { SectionTitle, BulletList, OrderedList, Introduction } from "../../components/ListRelated";

export default function Freezer() {
  return (
    <>
      <Introduction>
        Vacuum glass is used in refrigeration to improve insulation, cut energy
        costs, prevent condensation, and allow transparent doors in fridges,
        freezers, and cold storage units.
      </Introduction>

      <OrderedList>
        <li>
          <SectionTitle>
            Refrigerator &amp; Freezer Doors
          </SectionTitle>

          <BulletList>
            <li>
              Traditional doors use double glazing filled with inert gas (argon,
              krypton) but these still allow some heat transfer.
            </li>
            <li>
              Vacuum glass doors have a <strong>near-zero conductive heat transfer</strong>,{" "}
              which reduces compressor load and saves significant energy.
            </li>
            <li>
              They also maintain <strong>better visibility</strong> since less
              condensation or frost forms on the glass.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Display Cases
          </SectionTitle>

          <BulletList>
            <li>
              Vacuum glass allows <strong>clear, fog-free viewing</strong> of chilled
              or frozen goods without needing energy-intensive anti-condensation
              heaters.
            </li>
            <li>
              Improves customer experience and reduces operating costs.
            </li>
          </BulletList>
        </li>

        <li>
          <SectionTitle>
            Benefits of Vacuum Glass in Refrigeration
          </SectionTitle>

          <BulletList>
            <li>
              Up to <strong>40–60% energy savings</strong> compared to standard
              insulated glass.
            </li>
            <li>
              Clear visibility with minimal condensation.
            </li>
            <li>
              Thinner panels with high insulation → more usable storage volume.
            </li>
            <li>
              Longer compressor life due to reduced cycling.
            </li>
          </BulletList>
        </li>
      </OrderedList>
    </>
  );
}