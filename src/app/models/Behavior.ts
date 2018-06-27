enum BehaviorTrigger{
    Click,
    Blur,
    Focus,
}

export class Behavior{
    script: string;
    trigger: BehaviorTrigger;
}