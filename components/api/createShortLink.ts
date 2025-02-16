interface interface1 {
  longUrl: string;
  short: string;
  slug: string;
}

export default async function createShortLink(
  host: string,
  url: string,
  length: number | 5,
  slug: string | "",
): Promise<interface1> {
  return {
    longUrl: url,
    short: slug,
    slug: slug,
  };
}
