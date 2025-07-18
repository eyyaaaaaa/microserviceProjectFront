export interface NotificationModel {
    id: string;
    userId: string | null;
    externalId: string | null;
    title: string;
    shortDescription: string | null;
    description: string;
    status: string | null;
    checked: string | null;
    notificationType: string;
    date: string | null;
}
