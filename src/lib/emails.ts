import type { ContactValues, ProposalValues } from "./schemas";

const NAVY = "#0A2540";
const SAGE = "#4DA6A0";

function shell(title: string, rows: string, badge: string) {
  return `
  <div style="margin:0;padding:0;background:#F8F9FA;font-family:'Segoe UI',Helvetica,Arial,sans-serif;color:${NAVY};">
    <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
      <div style="background:${NAVY};border-radius:18px 18px 0 0;padding:28px 32px;">
        <div style="font-size:22px;font-weight:800;letter-spacing:1px;color:#fff;">
          UPWARD <span style="color:${SAGE};">↗</span>
        </div>
        <div style="font-size:12px;letter-spacing:3px;color:#86CDC7;margin-top:4px;">
          PHYSIO AND PERFORMANCE
        </div>
      </div>
      <div style="background:#fff;border:1px solid #E6EAEF;border-top:none;border-radius:0 0 18px 18px;padding:32px;">
        <span style="display:inline-block;background:${SAGE}1a;color:${SAGE};font-size:12px;font-weight:700;padding:6px 14px;border-radius:999px;text-transform:uppercase;letter-spacing:1px;">${badge}</span>
        <h1 style="font-size:20px;margin:18px 0 24px;color:${NAVY};">${title}</h1>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
        <p style="margin-top:28px;font-size:12px;color:#8A97A6;">
          Sent automatically from the Upward Physio and Performance website.
        </p>
      </div>
    </div>
  </div>`;
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #EEF1F4;color:#8A97A6;width:140px;vertical-align:top;font-weight:600;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #EEF1F4;color:${NAVY};white-space:pre-wrap;">${escape(
      value
    )}</td>
  </tr>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function contactEmail(v: ContactValues) {
  const rows =
    row("Name", v.name) +
    row("Email", v.email) +
    row("Phone", v.phone) +
    row("Company", v.company) +
    row("Inquiry", v.inquiryType) +
    row("Message", v.message);
  return shell("New website inquiry", rows, `${v.inquiryType} inquiry`);
}

export function proposalEmail(v: ProposalValues) {
  const rows =
    row("Contact", v.name) +
    row("Company", v.company) +
    row("Work email", v.email) +
    row("Phone", v.phone) +
    row("Team size", v.teamSize) +
    row("Interested in", v.interest) +
    row("Message", v.message);
  return shell("New corporate proposal request", rows, "Corporate proposal");
}
