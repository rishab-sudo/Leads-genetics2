
import cliBanner from "../../assets/clibanner.png";
import agrBanner from "../../assets/agrbanner.png";

export const blogs = [

  {
    id: 1,
    slug: "whole-genome-sequencing-2026",
    category: "RESEARCH GENOMICS",
    title: "Whole Genome Sequencing in 2026: New Frontiers in Research",
    excerpt:
      "Discover how whole genome sequencing helps researchers explore genetic variation, identify genomic changes and investigate biological questions across human genetics, agriculture, livestock and microbiology.",
    image: cliBanner,
    imageAlt: "Scientific research in a genomics laboratory",
    date: "19 Oct 2026",
    readTime: "6 min read",
    intro:
      "Whole genome sequencing (WGS) is a DNA sequencing method used to examine an organism’s entire genome, including both coding and non-coding regions. It helps researchers identify genetic variations and investigate their possible relationships with biological traits, diseases and other characteristics.",
    sections: [
      {
        heading: "What Is Whole Genome Sequencing?",
        paragraphs: [
          "Unlike targeted sequencing, WGS provides a broader view of genetic variation. It is useful across human genetics, livestock genomics, microbiology and evolutionary research.",
          "By examining the genome more comprehensively, researchers can investigate variations that may not be captured by approaches focused on selected genomic regions."
        ]
      },
      {
        heading: "How Does Whole Genome Sequencing Work?",
        paragraphs: [
          "A typical WGS workflow includes five main steps:"
        ],
        bullets: [
          "Sample collection and DNA extraction: Biological samples are collected, and DNA is isolated.",
          "DNA quality assessment: DNA is checked for quantity, purity and integrity.",
          "Library preparation and sequencing: DNA is prepared and processed using a suitable sequencing platform.",
          "Bioinformatics analysis: Sequencing data are analysed to identify genetic variants and other genomic features.",
          "Interpretation and reporting: Results are organized into datasets and reports relevant to the research objective."
        ]
      },
      {
        heading: "Key Developments in Whole Genome Sequencing",
        paragraphs: [
          "Several approaches are expanding the scope of genomic research and analysis."
        ],
        bullets: [
          "Improved variant detection: WGS can help identify single-nucleotide variants (SNVs), insertions and deletions (InDels), copy-number variations (CNVs) and structural variants.",
          "Long-read sequencing: Longer DNA reads can improve analysis of repetitive regions, complex rearrangements and genome assembly.",
          "Advanced bioinformatics: Computational tools support sequence alignment, genome assembly, variant identification and population comparisons.",
          "Multi-omics integration: Combining genomic data with transcriptomics, proteomics or epigenomics can help researchers investigate biological processes more comprehensively."
        ]
      },
      {
        heading: "Major Applications of Whole Genome Sequencing",
        paragraphs: [
          "Human genetics research: WGS helps researchers investigate inherited genetic variation, rare variants, disease-associated regions and potential biological mechanisms. Sequencing results alone do not establish a diagnosis or prove causation.",
          "Agricultural and livestock genomics: WGS supports studies of genetic diversity, breed relationships and variants potentially associated with growth, milk production, fertility and disease resistance.",
          "Microbial and pathogen research: Researchers compare bacterial, viral and fungal genomes, examine genetic changes and investigate antimicrobial resistance.",
          "Evolutionary and population genomics: Genome comparisons help researchers study genetic diversity, ancestry, evolutionary relationships and adaptation.",
          "Functional genomics and gene discovery: WGS can identify candidate genes and genomic regions for further investigation."
        ]
      },
      {
        heading: "Challenges and Limitations",
        paragraphs: [
          "Successful WGS projects depend on sample quality, appropriate study design, suitable reference genomes, reliable bioinformatics workflows and careful interpretation of variants. Large datasets also require appropriate storage, computing resources and data management. Human genomic research requires suitable consent, secure data handling and ethical oversight."
        ]
      },
      {
        heading: "The Future of Whole Genome Sequencing",
        paragraphs: [
          "Developments in long-read sequencing, pangenome references and computational analysis are expanding genomic research capabilities. Pangenomes incorporate genomic information from multiple individuals, helping researchers study genetic diversity beyond the representation of a single reference genome."
        ]
      }
    ]
  },

  {
    id: 2,
    slug: "genomic-selection-cattle-breeding",
    category: "AGRI GENOMICS",
    title:
      "Genomic Selection in Cattle: Potential Applications in Modern Breeding Programs",
    excerpt:
      "Explore how genomic selection can help breeders estimate genetic merit earlier and support more informed cattle breeding decisions, including work with indigenous zebu breeds.",
    image: agrBanner,
    imageAlt: "Cattle in a green agricultural field",
    date: "19 Oct 2026",
    readTime: "5 min read",
    intro:
      "Modern cattle breeding is moving beyond traditional selection based only on pedigree, physical appearance and production records. With advances in bovine genomics, breeders can evaluate an animal’s genetic potential earlier and make more informed breeding decisions.",
    sections: [
      {
        heading: "What Is Genomic Selection?",
        paragraphs: [
          "Genomic selection (GS) combines DNA marker information with statistical prediction models to estimate the genetic merit of cattle. It uses thousands of genetic markers distributed across an animal’s genome to predict its breeding value.",
          "When integrated with selective breeding and reproductive technologies such as Multiple Ovulation and Embryo Transfer (MOET) and in vitro fertilisation (IVF), it can help breeding programs improve desirable traits over successive generations."
        ]
      },
      {
        heading: "How Does Genomic Selection Work?",
        paragraphs: [
          "The process typically involves five steps:"
        ],
        bullets: [
          "Build a reference population: Collect DNA marker information and reliable performance records, including milk yield, fertility, growth and disease-related traits.",
          "Develop a prediction model: Use statistical methods to estimate relationships between genetic markers and economically important traits.",
          "Genotype selection candidates: Test DNA from young calves, heifers or other breeding candidates.",
          "Estimate genetic merit: Calculate a Genomic Estimated Breeding Value (GEBV), which predicts an animal’s genetic potential for particular traits.",
          "Make breeding decisions: Use predictions alongside health, pedigree, performance and genetic-diversity information to select suitable breeding animals."
        ]
      },
      {
        heading: "Understanding the Genomic Selection Workflow",
        paragraphs: [
          "DNA sampling → SNP genotyping → Prediction model → GEBV calculation → Selection and mating.",
          "This workflow allows breeders to evaluate candidates earlier than selection methods that depend heavily on mature-animal performance or progeny testing. Prediction accuracy depends on the quality of the reference population, breed representation and reliability of recorded traits."
        ]
      },
      {
        heading: "Bovine Genomics and Indian Cattle",
        paragraphs: [
          "Bovine genomics focuses on understanding and using genetic information in cattle. Within the wider field of Agri Genomics, these approaches can support livestock improvement, breeding research and the study of economically important traits.",
          "India’s indigenous cattle include zebu (Bos indicus) breeds such as Gir, Sahiwal and Red Sindhi. These populations are important to breeding and conservation efforts because of their adaptation to local environments and their distinct genetic characteristics.",
          "Genomic selection models need to be appropriate for the animals being evaluated. Breed-relevant reference populations, reliable performance records and suitable genetic markers are important when developing genomic tools for indigenous cattle."
        ]
      },
      {
        heading: "Challenges to Consider",
        paragraphs: [
          "Genomic selection requires investment in genotyping, representative reference populations, reliable farm records and technical expertise. Prediction models may not transfer accurately between breeds, so predictions should be validated for the target population.",
          "Breeding programs should balance productivity goals with adaptation, health and genetic diversity. Planned mating and monitoring of relatedness can help manage inbreeding risk."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Genomic selection is an important development in modern cattle breeding because it helps estimate genetic merit earlier and supports more informed selection decisions. When used alongside GWAS research, selective breeding, MOET, IVF and frozen embryo technology, it can contribute to structured genetic improvement programs.",
          "The strongest results come from combining reliable genomic predictions with high-quality performance records, breed-appropriate models and responsible mating strategies."
        ]
      }
    ]
  }
];

export const getBlogBySlug = (slug) =>
  blogs.find((blog) => blog.slug === slug);
