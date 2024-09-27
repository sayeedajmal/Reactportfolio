import { createClient } from "@sanity/client";

export default createClient({
    projectId: "f8q4esin",
    dataset: "production",
    useCdn: false,
});