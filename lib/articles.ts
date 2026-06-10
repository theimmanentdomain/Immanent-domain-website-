export interface ArticleContent {
  issueSlug: string;
  slug: string;
  title: string;
  contributor: string;
  type: string;
  body: string[];
}

export const articles: ArticleContent[] = [
  {
    issueSlug: "issue-one",
    slug: "the-room-where-it-happened",
    title: "The Room Where It Happened",
    contributor: "A. L. Voss",
    type: "Essay",
    body: [
      "Every scene has a founding myth. Ours was a basement in the wrong part of a city that no longer exists in its original form. The building is still there, I think. The people have scattered. What remains is the version of the story we tell ourselves, which has become, over time, as authoritative as anything that actually occurred.",
      "I arrived late, as most people do. The scene had already formed its internal hierarchies, its canonical texts, its shared references — a vocabulary I spent the first year learning by immersion, the way you learn a language when you have no other choice. What I mistook for community was partly instruction. What I mistook for generosity was partly recruitment.",
      "This is not a criticism. It is simply what scenes are: systems of influence that do not announce themselves as such. The most powerful scenes are the ones that feel like accidents, like discovery, like you simply stumbled into a room and found people who already knew what you were trying to say. The stumbling is always engineered. The room is always waiting.",
      "The question that has stayed with me is not whether the scene formed me — it did, obviously, the way any sustained environment forms you — but which parts of what I make are mine in any meaningful sense. When I find myself reaching for a certain register, a certain set of concerns, a particular relationship between sentence and silence, I sometimes wonder whether I am expressing something or reproducing it. Often the distinction does not hold.",
      "What I know is this: the room was real. The people in it were real. Whatever happened there — the arguments, the records, the late hours, the particular quality of attention we gave each other's work — that was real. The myth came after. The myth always comes after. But the myth is not nothing. It is the form in which the experience survives."
    ]
  },
  {
    issueSlug: "issue-one",
    slug: "borrowed-atmospheres",
    title: "Borrowed Atmospheres",
    contributor: "Cleo Maret",
    type: "Criticism",
    body: [
      "What does it mean to be formed by something you arrived at too late? The retrospective scene-joiner is a figure criticism has not yet fully named. She is not a nostalgia merchant; she did not live through the original moment and lament its passing. She encountered it after the fact, through records and testimony and the residue that remains in the culture, and made it her own anyway.",
      "I am thinking of a particular kind of influence: the scene absorbed secondhand, through archives and stories and the accounts of survivors, which nevertheless shapes a sensibility as completely as direct experience might have. This is not imitation. It is something more like inheritance — the claiming of a lineage that was not initially offered to you.",
      "The question of authenticity haunts this position. The person who was there gets to say she was there. The person who was not there has no such claim, and must find some other ground on which to stand. Often she finds it in the work itself: in reading the texts closely enough, in understanding the conditions of their production well enough, to participate in the conversation those texts were having — even if she arrives at that conversation decades late.",
      "There is something generative about lateness. The person who arrives after the moment has ended can see the shape of it more clearly than the people who were inside it. Distance is a form of perspective. The risk is that the distance becomes its own kind of romance: the past made safely aesthetic, stripped of its difficulty and its failure."
    ]
  },
  {
    issueSlug: "issue-one",
    slug: "everything-was-underground",
    title: "Everything Was Underground",
    contributor: "D. Farrow",
    type: "Reported",
    body: [
      "Three years covering a music scene that refused to be written about, and what that refusal said about the culture it was protecting.",
      "The first person I asked for an interview said no. The second said yes and then stopped returning messages. The third agreed on the condition that I not name the venue, the city, the label, or the year. What she was willing to tell me turned out to be, against all expectation, more useful than anything a named source could have provided.",
      "What she described was a scene organized around a principled resistance to documentation — not secrecy exactly, but a deep suspicion of the mechanisms by which scenes become legible to people outside them. The act of coverage, she said, is also the act of ending. Once a thing can be described accurately from the outside, it has already become something other than what it was. The description is the autopsy.",
      "I have thought about this often in the years since. Journalism about subcultures is, on some level, always journalism about the moment just before those subcultures cease to be what they were. The story arrives when the scene is already beginning to open, to admit outsiders, to trade its opacity for recognition. The coverage does not cause this transformation. But it marks it, and in marking it, accelerates it.",
      "What I found instead of a story was a record of my own position: an outsider who wanted access, who was being asked to reckon with what access costs. The scene's refusal to be documented was not obstruction. It was argument. I am still working out my response."
    ]
  },
  {
    issueSlug: "issue-one",
    slug: "the-aesthetics-of-belonging",
    title: "The Aesthetics of Belonging",
    contributor: "Simone Achebe",
    type: "Essay",
    body: [
      "Style is not vanity. For certain communities, the right coat, the right posture, the right silence, constitutes a form of argument. To dress in a particular way is to make a claim about the world — about what matters, about who you are in relation to it, about the kind of attention you are and are not available to receive.",
      "I grew up watching my mother choose her clothes for specific encounters the way a lawyer prepares a brief. Each outfit was addressed to a particular audience and making a particular case. The case was always, at some level, the same: I am not what you think I am. I am not reducible to what you see when you look at me. Look more carefully.",
      "This is not vanity. Vanity is about self-regard. This is about negotiation — with institutions, with strangers, with the assumptions that arrive before you do. Style, in this sense, is defensive and declarative simultaneously. It is both armor and argument.",
      "What interests me is how this kind of style-as-argument operates within scenes, as opposed to against the outside world. Inside a scene, the negotiations are more fine-grained: you are arguing not that you belong to the human race but that you belong here, specifically, in this room, among these people, in this conversation. The aesthetics of belonging are the aesthetics of a particular claim, made continuously, to a particular audience.",
      "The scene sees you. That is its appeal and its danger. To be seen precisely is also to be held precisely — to be accountable to the version of yourself the scene has recognized. Leaving a scene is partly leaving that accountability. It is also, always, a kind of grief."
    ]
  }
];

export function getArticle(issueSlug: string, slug: string): ArticleContent | undefined {
  return articles.find((a) => a.issueSlug === issueSlug && a.slug === slug);
}
