import StructuredData from "@/components/career/StructuredData";
import { siteConfig } from "@/lib/career/advisoryContent";

type ProductStructuredDataProps = {
  name: string;
  description: string;
  path: string;
  price: number;
};

export default function ProductStructuredData({ name, description, path, price }: ProductStructuredDataProps) {
  const url = `${siteConfig.canonicalOrigin}${path}`;

  return <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: { "@id": `${siteConfig.canonicalOrigin}/#organization` },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: String(price),
      availability: "https://schema.org/InStock",
      url,
    },
  }} />;
}
