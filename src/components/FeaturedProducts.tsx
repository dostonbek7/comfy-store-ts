import { ProductsGrid } from "."
import SectionTitle from "./SectionTitle"

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text='fetured products'/>
      <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts