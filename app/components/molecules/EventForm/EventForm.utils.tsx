import {
  RectangleStackIcon,
  ChatBubbleBottomCenterIcon,
  PhotoIcon,
  MapPinIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

type FormFieldId =
  | "title"
  | "description"
  | "image"
  | "location"
  | "name"
  | "email";

interface FormFields {
  id: FormFieldId;
  icon: any;
  placeholder?: string;
}

export const getFormFields = (): FormFields[] => [
  {
    id: "title",
    icon: RectangleStackIcon,
    placeholder: "What is this event about?",
  },
  {
    id: "description",
    icon: ChatBubbleBottomCenterIcon,
    placeholder: "Any additional info?",
  },
  {
    id: "image",
    icon: PhotoIcon,
    placeholder: "Enter your image url",
  },
  {
    id: "location",
    icon: MapPinIcon,
    placeholder: "Where is this to be held?",
  },
  {
    id: "name",
    icon: UserIcon,
    placeholder: "What is your name?",
  },
  {
    id: "email",
    icon: EnvelopeIcon,
    placeholder: "What is your email?",
  },
];
